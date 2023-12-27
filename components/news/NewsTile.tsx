import ActionAreaCard, { CardPropsType } from "../material-ui/ActionAreaCard";

const NewsTile: React.FC<CardPropsType> = ({ title, description, image }) => {
	return <ActionAreaCard title={title} description={description} image={image} />;
};

export default NewsTile;
