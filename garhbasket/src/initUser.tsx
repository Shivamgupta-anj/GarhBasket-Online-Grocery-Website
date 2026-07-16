'use client'
import React from 'react'
import useGetMe from '@/hooks/userGetMe'
function InitUser() {
    useGetMe()
    return null
}
export default InitUser
