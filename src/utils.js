/**
 * Equivalent de array_column de PHP, 
 * retournant un tableau de l'index n
 * @param {*} arr tableau de référence
 * @param {*} n index
 * @returns tableau de l'index n des valeurs de arr
 */
export const arrayColumn = (arr, n) => arr.map(x => x[n]);