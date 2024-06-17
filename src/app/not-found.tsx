"use client"

import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()
  router.back()
  return '';
}