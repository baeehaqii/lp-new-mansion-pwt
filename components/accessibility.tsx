import { School, Hospital, TreePine, ShoppingBag } from "lucide-react"

export default function Accessibility() {
  const facilities = [
    {
      icon: <Hospital />,
      title: "Fasilitas Kesehatan",
      items: [
        "4 menit dari RSU Wiradadi Husada",
        "6 menit dari RSUD Prof. Dr. Margono Soekarjo",
        "7 menit dari RS Orthopaedi Purwokerto",
      ],
    },
    {
      icon: <School />,
      title: "Fasilitas Pendidikan",
      items: [
        "8 menit dari Fakultas Kedokteran Unsoed",
        "8 menit dari IT Telkom Purwokerto",
        "8 menit dari Fakultas Kesehatan UMP",
      ],
    },
    {
      icon: <ShoppingBag />,
      title: "Fasilitas Perbelanjaan",
      items: [
        "6 menit dari Depo Pelita Mall",
        "11 menit dari Rita Pasaraya",
      ],
    },
    {
      icon: <TreePine />,
      title: "Fasilitas Umum",
      items: [
        "6 menit dari Terminal Bulupitu",
        "7 menit dari Taman Andhang Pangrenan",
      ],
    },
  ]

  return (
    <section id="aksesibilitas" className="accessibility-section">
      <div className="container">
        <h2 className="section-title">Akses Mudah</h2>
        <h3 className="accessibility-subtitle">Terhubung dengan Segala Kebutuhan</h3>

        <div className="accessibility-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="accessibility-card about-stat-card">
              <div className="accessibility-header">
                <div className="accessibility-icon">{facility.icon}</div>
                <h3 className="accessibility-title">{facility.title}</h3>
              </div>

              <ul className="accessibility-list">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
