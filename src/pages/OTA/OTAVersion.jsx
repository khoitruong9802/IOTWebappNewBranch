const OTAVersion = ({ updates }) => {
  return (
    <div>
      <h1>OTA Updated Lists</h1>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Date & Time</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {updates.map((update) => (
            <tr key={update.id}>
              <td>{update.id}</td>
              <td>{update.date}</td>
              <td>{update.version}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OTAVersion;
