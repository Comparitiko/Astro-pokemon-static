import type { FavoritePokemon } from "@/interfaces/favorite-pokemon"
import { createSignal, Show } from "solid-js"

interface Props {
	pokemon: FavoritePokemon
	deleteFavorite: (pokemon: FavoritePokemon) => void
}

export const FavoritePokemonCard = ({ pokemon, deleteFavorite }: Props) => {

	const [isVisible, setIsVisible] = createSignal(true)

	const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`


	return (
		<Show when={isVisible()}>
			<div class="flex flex-col justify-center items-center">
			<a href={`/pokemons/${pokemon.name}`}>
				<img src={imageSrc} alt={`Imagen del pokemon ${pokemon.name}`} width="96" height="96" 
				style={`view-transition-name: ${pokemon.id}-image;`} />
				<p class="capitalize">#{pokemon.id} {pokemon.name}</p>
			</a>

			<button onClick={() => deleteFavorite(pokemon)} class="text-red-400">
				Borrar
			</button>
		</div>
		</Show>
	)
}