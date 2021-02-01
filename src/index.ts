/**
 * Options for querying the API.
 */
export interface MyOptions {
    /**
     * Maximum number of items to retrieve.
     */
    limit?: number;

    /**
     * Text to search for within content.
     */
    query: string;
}

/**
 * Summary of an example content from the API.
 */
export interface MyResult {
    /**
     * Body text from the content.
     */
    text: string;

    /**
     * Top-level title of the content...
     */
    title: string;
}

/**
 * Queries the API for some search text.
 * 
 * @param query - Options for querying the API.
 */
export const myApi = async (options: MyOptions): Promise<Error | MyResult[]> => {
    if (Math.random() > 0.75) {
        return new Error("Oh no! It broke!");
    }

    return new Array(options.limit || 1)
        .map(index => (
            {
                text: `Item ${index} for query: '${options.query}'`,
                title: "Example response"
            }
        ))
};
