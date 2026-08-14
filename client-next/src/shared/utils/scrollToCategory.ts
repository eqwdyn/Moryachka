export const scrollToCategory = (categoryId: number) => {
  const el = document.querySelector(`[data-category-id="${categoryId}"]`);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
};
