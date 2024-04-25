import classes from "./loading.module.css";

//используется по дефолту при загрузке страницы в папке которой лежит loading.js
export default function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching meals...</p>;
}
