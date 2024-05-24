import styles from './members.module.scss';

const data = [
	{
		name: 'John Smith',
		general_score: 210,
		email: 'john@somewhere.com',
		status: 'active',
		score: '+ 5 | + 10 | + 15',
		notes: 'great performance',
	},
	{
		name: 'Ann Smith',
		general_score: 250,
		email: 'ann@somewhere.com',
		status: 'active',
		score: '+ 5 | + 10 | + 15',
		notes: 'improve posture',
	},
	{
		name: 'David Brown',
		general_score: 180,
		email: 'david@somewhere.com',
		status: 'active',
		score: '+ 5 | + 10 | + 15',
		notes: '',
	}
]


export function Members() {
  return (
    <div className={styles.members}>
      <h1>
        Champs in this team : <span> {data.length}</span>
      </h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>General Score</th>
            <th>Email</th>
            <th>Status</th>
            <th>Score</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className={styles.singleMember}>
              <td>{user.name}</td>
              <td>{user.general_score}</td>
              <td>{user.email}</td>
              <td className={styles[user.status]}>{user.status}</td>
              <td className={styles['action']}>{user.score}</td>
              <td>{user.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
