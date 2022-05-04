import { formatDistance, subHours } from 'date-fns'

const TimeAgo = () => {
	return formatDistance(subHours(new Date(), 3), new Date(), {
		addSuffix: true,
	})
}

export default TimeAgo
