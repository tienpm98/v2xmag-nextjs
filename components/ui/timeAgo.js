import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TimeAgo = ({ time }) => {
	return formatDistanceToNow(new Date(time), {
		addSuffix: true,
	})
}

export default TimeAgo
