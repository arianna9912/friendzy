import { doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

let timer = null
let activeUid = ''

const write = (data) =>
  activeUid ? updateDoc(doc(db, 'users', activeUid), data).catch(() => {}) : Promise.resolve()

export function startPresence(uid) {
  stopPresence(false)
  activeUid = uid
  write({ online: true, lastSeen: serverTimestamp() })
  timer = setInterval(() => {
    write({ online: true, lastSeen: serverTimestamp() })
  }, 15000)
}

export function stopPresence(markOffline) {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
  const pending = markOffline ? write({ online: false }) : Promise.resolve()
  activeUid = ''
  return pending
}