/**
 * Get the Strapi Base URL from environment variables
 * @returns {string} The base URL for Strapi
 */
export const getStrapiURL = () => {
    return import.meta.env.VITE_API_URL || 'http://localhost:1337';
};

/**
 * Helper to get the full URL for media assets
 * @param {string} url - The URL of the media asset (e.g., /uploads/image.png)
 * @returns {string} The full URL including the base domain
 */
export const getStrapiMedia = (url) => {
    if (url == null) {
        return null;
    }

    // Return the full URL if it's already absolute (starts with http or https)
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }

    // Otherwise prepend the Strapi URL
    return `${getStrapiURL()}${url}`;
};

/**
 * Fetch data from the Strapi API
 * @param {string} path - The API path to fetch from (e.g., /api/pages)
 * @param {object} [params] - Optional query parameters
 * @returns {Promise<any>} The parsed JSON data
 */
export const fetchAPI = async (path, params = {}) => {
    try {
        const mergedParams = {
            ...params,
        };

        // Build query string
        const queryString = Object.keys(mergedParams).length > 0
            ? `?${new URLSearchParams(mergedParams).toString()}`
            : '';

        // If the path already includes parameters (like filters[slug]=home), simply append any new ones carefully or just use the path as is if no params passed
        // For simplicity in this project, we'll assume 'path' can be the full relative path '/api/pages?filters...' 
        // OR a clean path '/api/pages' with a params object.

        // Let's keep it simple: The user provides the full relative path starting with /api
        const requestUrl = `${getStrapiURL()}${path}`;

        const response = await fetch(requestUrl);

        if (!response.ok) {
            throw new Error(`An error occurred while fetching the Strapi API: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Strapi Fetch Error:', error);
        throw error;
    }
};
