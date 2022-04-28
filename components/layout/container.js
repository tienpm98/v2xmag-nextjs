export default function Container({ className, children }) {
	return <div className={'w-full ' + className}>{children}</div>
}
