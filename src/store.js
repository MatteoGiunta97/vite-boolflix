import { reactive } from "vue";

export const store = reactive({
    movies: [],
    tvSeries: [],
    searchInput: '',
    apiKey: '7b61ce1d470acbd4169189413ce5efa0'
});