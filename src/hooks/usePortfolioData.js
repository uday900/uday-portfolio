import { useEffect, useState } from "react";

const CDN_URL =
  `https://cdn.jsdelivr.net/gh/uday900/uday-portfolio@main/public/portfolio-data.json?t=${Date.now()}`;
const FALLBACK_URL =
  "https://raw.githubusercontent.com/uday900/uday-portfolio/main/public/portfolio-data.json";
const CACHE_KEY = "portfolio-data-cache";

let cachedData = null;
let cachedError = null;
let fetchPromise = null;
const listeners = new Set();

const readCachedData = () => {
  if (cachedData) return cachedData;
  if (typeof window === "undefined") return null;

  try {
    const cached = window.localStorage.getItem(CACHE_KEY);
    cachedData = cached ? JSON.parse(cached) : null;
    return cachedData;
  } catch {
    return null;
  }
};

const writeCachedData = (data) => {
  cachedData = data;

  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    // localStorage can fail in private mode or when quota is exceeded.
  }
};

const notifyListeners = () => {
  listeners.forEach((listener) => listener());
};

const fetchJson = async (url) => {
  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to fetch portfolio data (${response.status})`);
  }

  return response.json();
};

const fetchPortfolioData = async () => {
  try {
    let freshData;

    try {
      freshData = await fetchJson(FALLBACK_URL);
    } catch {
      freshData = await fetchJson(FALLBACK_URL);
    }

    cachedError = null;
    writeCachedData(freshData);
    notifyListeners();
    return freshData;
  } catch (error) {
    cachedError = error;
    throw error;
  } finally {
    fetchPromise = null;
    notifyListeners();
  }
};

const ensureFreshData = () => {
  if (!fetchPromise) {
    fetchPromise = fetchPortfolioData();
  }

  return fetchPromise;
};

export const usePortfolioData = () => {
  const [state, setState] = useState(() => {
    const initialData = readCachedData();

    return {
      data: initialData,
      loading: !initialData,
      error: cachedError,
    };
  });

  useEffect(() => {
    const updateState = () => {
      setState({
        data: cachedData,
        loading: !cachedData && !!fetchPromise,
        error: cachedError,
      });
    };

    listeners.add(updateState);
    ensureFreshData().catch(() => {});

    return () => {
      listeners.delete(updateState);
    };
  }, []);

  return state;
};
