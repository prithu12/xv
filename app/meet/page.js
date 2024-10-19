"use client"

import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'

import styles from '@/styles/home.module.css'
import { useState } from 'react';
import { Link } from 'lucide-react';

export default function page() {
  const router = useRouter()
  const [roomId, setRoomId] = useState('')

  const createAndJoin = () => {
    const roomId = uuidv4()
    router.push(`/${roomId}`)
  }

  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`)
    else {
      alert("Please provide a valid room id")
    }
  }
  return (
    <div className={styles.homeContainer}>
      <div className={styles.imageContainer}>
        {/* Replace with actual image */}
        <div className={styles.placeholderImage} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Video calls and meetings for Deaf and Mute</h1>
        <p className={styles.subtitle}>
          Connect, collaborate and celebrate from anywhere with Google Meet
        </p>
        <div className={styles.actions}>
          <button onClick={createAndJoin} className={styles.newMeetingButton}>
            New meeting
          </button>
          <div className={styles.enterRoom}>
            <Link size={20} className={styles.linkIcon} />
            <input
              placeholder="Enter a code or link"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className={styles.input}
            />
          </div>
          <button onClick={joinRoom} className={styles.joinButton}>
            Join
          </button>
        </div>
      </div>

    </div>
  )
}
