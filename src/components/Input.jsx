export default function Input() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="test">Initial Investment</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="test">Annual Investment</label>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="test">Expected Return</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="test">Duration</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
