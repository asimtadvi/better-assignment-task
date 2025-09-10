import Layout from '../components/Layout';
import MortgageCalculator from '../components/MortgageCalculator';

export default function MortgageCalculatorPage({ query }) {
  // Optionally read taxes & zip from URL query string if present
  const taxes = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('taxes') : null;
  const zip = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('zip') : null;

  return (
    <Layout>
      <main style={{maxWidth: 1100, margin: '0 auto', padding: '2rem'}}>
        <MortgageCalculator initialTaxes={taxes || 0} initialZip={zip || ''} />
      </main>
    </Layout>
  );
}
