interface FetchInputType {
  body?: unknown;
  url: string;
  method?: string;
  cache?: RequestCache;
  accept?: "octet-stream" | "json";
  convertJson?: boolean;
}

interface FetchResultType<S> {
  response?: S;
  error?: ErrorEvent;
}

export async function fetchHelper<S = Response>({
  body,
  url,
  method = "GET",
  cache,
  accept = "json",
  convertJson = true,
}: FetchInputType): Promise<FetchResultType<S>> {
  try {
    const headers = new Headers();

    headers.append("accept", `application/${accept}`);
    headers.append("Content-Type", "application/json");

    const raw = body ? JSON.stringify(body) : undefined;

    const requestOptions = {
      method: method,
      headers: headers,
      body: raw,
      redirect: "follow" as RequestRedirect,
      cache,
    };

    const res = await fetch(url, requestOptions);

    if (res.status >= 400) {
      if (convertJson) {
        throw await res.json();
      } else {
        throw await res.text();
      }
    }

    const isJson = res.headers
      .get("content-type")
      ?.includes("application/json");

    if (isJson && convertJson) {
      try {
        return {
          response: (await res.json()) as S,
        };
      } catch {
        return {
          response: res as S,
        };
      }
    }
    return {
      response: res as S,
    };
  } catch (error) {
    return {
      error: new ErrorEvent("API Error", { error }),
    };
  }
}
