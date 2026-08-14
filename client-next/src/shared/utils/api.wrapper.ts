export async function apiWrapper<T>(callback: () => Promise<T>) {
  let isError: boolean = false;
  let data: T | undefined;
  try {
    data = await callback();
  } catch (e) {
    isError = true;
    console.error(JSON.stringify(e, null, 2));
  }

  return { isError, data };
}
