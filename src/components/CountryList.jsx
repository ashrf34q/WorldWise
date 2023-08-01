import styles from "./CountryList.module.css";
import PropTypes from "prop-types";
import Message from "./Message";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";

CountryList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city in the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <div className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem country={country} key={i} />
      ))}
    </div>
  );
}

export default CountryList;
