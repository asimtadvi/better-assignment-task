import { useState, useMemo } from 'react';
import styles from '../styles/Calculator.module.css';

export default function MortgageCalculator({
  initialTaxes = 0,
  initialZip = ''
}) {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [termYears, setTermYears] = useState(30);
  const [annualTaxes, setAnnualTaxes] = useState(Number(initialTaxes) || 0);
  const [zip, setZip] = useState(initialZip || '');

  const loanAmount = Math.max(0, homePrice - downPayment);
  const monthlyRate = (interestRate / 100) / 12;
  const numberOfPayments = termYears * 12;

  const monthlyPI = useMemo(() => {
    if (monthlyRate === 0) return loanAmount / numberOfPayments;
    const M = loanAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    return M;
  }, [loanAmount, monthlyRate, numberOfPayments]);

  const monthlyTaxes = annualTaxes / 12;
  const estimatedMonthly = monthlyPI + monthlyTaxes;

  return (
    <div className={styles.container}>
      <h2>Mortgage Calculator</h2>
      <div className={styles.grid}>
        <label className={styles.label}>
          Home price
          <input
            type="number"
            className={styles.input}
            value={homePrice}
            onChange={e => setHomePrice(Number(e.target.value) || 0)}
          />
        </label>

        <label className={styles.label}>
          Down payment
          <input
            type="number"
            className={styles.input}
            value={downPayment}
            onChange={e => setDownPayment(Number(e.target.value) || 0)}
          />
        </label>

        <label className={styles.label}>
          Interest rate (annual %)
          <input
            type="number"
            step="0.01"
            className={styles.input}
            value={interestRate}
            onChange={e => setInterestRate(Number(e.target.value) || 0)}
          />
        </label>

        <label className={styles.label}>
          Term (years)
          <input
            type="number"
            className={styles.input}
            value={termYears}
            onChange={e => setTermYears(Number(e.target.value) || 0)}
          />
        </label>

        <label className={styles.label}>
          Annual Taxes
          <input
            type="number"
            className={styles.input}
            value={annualTaxes}
            onChange={e => setAnnualTaxes(Number(e.target.value) || 0)}
          />
        </label>

        <label className={styles.label}>
          Zip Code
          <input
            type="text"
            className={styles.input}
            value={zip}
            onChange={e => setZip(e.target.value)}
          />
        </label>
      </div>

      <div className={styles.results}>
        <h3>Estimate</h3>
        <div className={styles.row}><span>Loan amount</span><strong>${loanAmount.toLocaleString()}</strong></div>
        <div className={styles.row}><span>Monthly P&I</span><strong>${monthlyPI.toFixed(2)}</strong></div>
        <div className={styles.row}><span>Monthly taxes</span><strong>${monthlyTaxes.toFixed(2)}</strong></div>
        <div className={`${styles.row} ${styles.total}`}>
          <span>Estimated monthly</span>
          <strong>${estimatedMonthly.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}
