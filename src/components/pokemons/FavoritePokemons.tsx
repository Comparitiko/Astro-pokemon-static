import type { FavoritePokemon } from "@/interfaces/favorite-pokemon"
import { For, createSignal } from "solid-js"
import { FavoritePokemonCard } from "./FavoritePokemonCard"

const getLocalStoragePokemons = (): FavoritePokemon[] => {
	return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export const FavoritePokemons = () => {

	const [favoritePokemons, setFavoritePokemons] = createSignal(getLocalStoragePokemons())

	return (
		<div class="grid grid-cols-2 sm:grid-cols-4">
			<For each={favoritePokemons()}>
				{
					(pokemon) => (
						<FavoritePokemonCard pokemon={ pokemon } />
					)
				}
			</For>
		</div>
	)
}