import { useFileInput } from './root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './file-item'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate({})
  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return <FileItem key={file.name} name={file.name} size={file.size} />
      })}
    </div>
  )
}
