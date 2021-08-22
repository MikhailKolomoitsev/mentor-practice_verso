import PropTypes from "prop-types";
import s from "./Opportunities.module.css";

const Opportunities = ({ items }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>VSO Staking Opportunities</h2>
      <p className={s.description}>
        If you’re holding VSO, you can earn reward either by providing liquidity
        for VSO tradings pairs or by staking VSO in a direct farm.
      </p>

      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.tr}>
            <th className={s.th}>Staking Pool</th>
            <th className={s.th}>Earn</th>
            <th className={s.th + " " + s.thstar + " " + s.star}>APY</th>
            <th className={s.th}>Remarks</th>
          </tr>
        </thead>

        <tbody className={s.tbody}>
          {items.map(({ id, stakingPool, earn, apy, remarks }) => (
            <tr className={s.tr} key={id}>
              <td className={s.td}>{stakingPool}</td>
              <td className={s.td}>{earn}</td>
              <td className={s.td}>{apy}</td>
              <td className={s.td + " " + s.red}>{remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className={s.note}>
        APY % can vary depending on the pool setup, remaining duration, etc.
      </p>
    </section>
  );
};

Opportunities.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      stakingPool: PropTypes.string.isRequired,
      earn: PropTypes.string.isRequired,
      apy: PropTypes.string.isRequired,
      remarks: PropTypes.string.isRequired,
    })
  ),
};

export default Opportunities;
