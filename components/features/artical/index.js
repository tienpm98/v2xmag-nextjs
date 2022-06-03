import React from 'react'
import ArticalCard from './artical-card'
import Section from './section'

const Artical = ({ title, slug, coverImage }) => {
	return (
		<>
			<Section sectionTitle='Recommended for you'>
				<ArticalCard title={title} slug={slug} coverImage={coverImage} />
			</Section>
		</>
	)
}

export default Artical
