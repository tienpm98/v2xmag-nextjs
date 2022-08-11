import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TimeAgo = ({ time }) => {
	if (!time) return null
	return formatDistanceToNow(new Date(time), {
		addSuffix: true,
	})
}

export default TimeAgo
