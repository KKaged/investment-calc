export default function Table({ input }) {
  console.log(input);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Volume</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0</td>
          <td>{input.initialInvestment}</td>
          <td>0</td>
          <td>0</td>
          <td>{input.initialInvestment}</td>
        </tr>
      </tbody>
    </table>
  );
}
