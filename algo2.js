function insertionSort(arr) {
    // Obtenez la longueur du tableau
    const n = arr.length;

    // Parcourez le tableau à partir du deuxième élément (index 1)
    for (let i = 1; i < n; i++) {
        // Stockez la valeur de l'élément actuel dans la variable current
        let current = arr[i];

        // Initialisez un indice j pour parcourir la séquence triée à partir de i-1
        let j = i - 1;

        // Parcourez la séquence triée à partir de i-1 jusqu'à ce que j atteigne 0 ou que l'élément actuel soit plus grand que l'élément à l'indice j
        while (j >= 0 && arr[j] > current) {
            // Déplacez l'élément à l'indice j vers la droite pour faire de la place pour l'élément actuel
            arr[j + 1] = arr[j];
            // Décrémentez j pour parcourir la séquence triée en sens inverse
            j--;
        }

        // Insérez l'élément actuel à la bonne position dans la séquence triée
        arr[j + 1] = current;
    }

    // Retournez le tableau trié
    return arr;
}

// Exemple d'utilisation
const array = [5, 3, 8, 4, 2];
console.log("Avant le tri par insertion:", array);
insertionSort(array);
console.log("Après le tri par insertion:", array);

