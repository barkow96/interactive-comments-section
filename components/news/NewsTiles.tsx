import NewsTile from "./NewsTile";

export default function NewsTiles() {
	const news = [
		{
			title: "Mathematics",
			description: "The mathematically perfect table size for solving any jigsaw puzzle.",
			image: "./images/news/mathematics.jpg",
		},
		{
			title: "Environment",
			description: "Will 2024 see the world finally turning awawy from fossil fuels?",
			image: "./images/news/world-environment.png",
		},
		{
			title: "Technology",
			description: "Artififcial pain sensors could help robots avoid damaging themselves.",
			image: "./images/news/technology-watch.jpg",
		},
	];

	return (
		<>
			{news.map((singleNews) => (
				<NewsTile key={singleNews.title} title={singleNews.title} description={singleNews.description} image={singleNews.image} />
			))}
		</>
	);
}
