import './users.css'
export default function LoadingSkelton() {
  return (
    <>
  <div id="table" className="tableWrapper">
    <table className="GeneratedTable table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Foto</th>
      <th>Nama Lengkap</th>
      <th>Email</th>
      <th>Website</th>
      <th>Informasi Lengkap</th>
    </tr>
  </thead>
  <tbody>
      <tr>
      <td className='loading'><div className='bar'></div></td>
      <td className='loading'><div className='bar'></div></td>
      <td className='loading'><div className='bar'></div></td>
      <td className='loading'><div className='bar'></div></td>
      <td className='loading'><div className='bar'></div></td>
      <td className='loading'><div className='bar'></div></td>
    </tr>

  </tbody>
</table>
</div>
    </>
  )
}
