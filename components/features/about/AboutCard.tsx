export default function AboutCard() {
  return (
    <div>
      <h2 className="text-2xl mb-8 text-center" style={{ color: 'transparent', WebkitTextStroke: '2px gold' }}>
        Things I Love
      </h2>
      <ul className="list-disc list-inside text-gold">
        <li>Java ☕</li>
        <li>Backend Development 🖥️</li>
        <li>Python 🐍</li>
        <li>Machine Learning 🤖</li>
        <li>Data Science 📊</li>
      </ul>
    </div>
  );
}