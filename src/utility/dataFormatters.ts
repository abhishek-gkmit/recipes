export function formatRandomRecipes(recepies: any[]) {
  return recepies?.map(({ id, title, image, readyInMinutes }) => {
    return {
      id: id + '',
      title,
      img: image,
      time: readyInMinutes + '',
    } as RandomRecipe;
  });
}
