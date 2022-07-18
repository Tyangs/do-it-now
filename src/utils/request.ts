type RequestOptions = Omit<RequestInit, 'body'> & {
  body: Record<string, any> | RequestInit['body'];
};

export const getRequestHeaders = async (
  headers?: HeadersInit
): Promise<HeadersInit> => ({
  'Content-Type': 'application/json',
  ...headers,
});

export const isRequestInit = (options?: RequestInit) =>
  options ? 'body' in options : false;

export const getRequestInit = async (
  options?: RequestOptions
): Promise<RequestInit> => {
  let init: RequestInit | undefined;
  if (options?.body) {
    init = {
      ...options,
      body: JSON.stringify(options.body),
    };
    return {
      ...init,
      headers: await getRequestHeaders(options?.headers),
    };
  }
  return {
    ...options,
    headers: await getRequestHeaders(options?.headers),
  } as RequestInit;
};

export const request = async <Response>(
  uri: string,
  options?: RequestOptions
): Promise<Response> => {
  const init = await getRequestInit(options);

  const response = await fetch(uri, init);

  if (response.status === 401) {
    // logout();
  }

  return await response.json();
};
