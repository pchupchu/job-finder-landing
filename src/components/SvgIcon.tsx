import { useDynamicSvgImport } from '../hooks/useDynamicSvgImport'

interface IProps {
  iconName: string
  wrapperStyle?: string
  svgProp?: React.SVGProps<SVGSVGElement>
  // className: string;
}

function SvgIcon(props: IProps) {
  const { iconName, wrapperStyle, svgProp } = props
  const { loading, SvgIcon } = useDynamicSvgImport(iconName)

  return (
    <>
      {loading && (
        <div className='rounded-full bg-slate-blue animate-pulse h-8 w-8'></div>
      )}
      {SvgIcon && (
        <div className={wrapperStyle}>
          <SvgIcon {...svgProp} />
        </div>
      )}
    </>
  )
}

export default SvgIcon
