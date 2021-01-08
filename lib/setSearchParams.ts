export const setSearchParams = (
  key: string,
  value: string | string[] | undefined
) => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  if (!value) {
    params.delete(key);
  } else if (Array.isArray(value)) {
    params.delete(key);
    value.forEach((element) => {
      params.append(key, element);
    });
  } else {
    params.set(key, value);
  }

  history.replaceState(
    {},
    "",
    `${window.location.pathname}${
      Array.from(params.entries()).length ? "?" : ""
    }${params.toString()}`
  );
};
