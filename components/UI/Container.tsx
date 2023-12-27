import classes from "./Container.module.css";

const Container: React.FC<{ children: React.ReactNode }> = (props) => {
	return <main className={classes.container}>{props.children}</main>;
};

export default Container;
