/**
 * @fileoverview Date and time utility functions
 * @description Comprehensive date handling utilities with timezone support
 */

/**
 * @description Formats a date for display in the UI
 * @param date - Date to format
 * @param format - Format type ('short' | 'long' | 'time' | 'datetime')
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string | number,
  format: 'short' | 'long' | 'time' | 'datetime' = 'short'
): string {
  const dateObj = new Date(date)
  
  if (isNaN(dateObj.getTime())) {
    throw new Error('Invalid date provided to formatDate')
  }

  const options: Intl.DateTimeFormatOptions = {
    short: { month: 'short', day: 'numeric' },
    long: { year: 'numeric', month: 'long', day: 'numeric' },
    time: { hour: 'numeric', minute: '2-digit', hour12: true },
    datetime: { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true 
    },
  }[format]

  return new Intl.DateTimeFormat('en-US', options).format(dateObj)
}

/**
 * @description Gets relative time string (e.g., "2 hours ago")
 * @param date - Date to compare
 * @param relativeTo - Base date to compare against (defaults to now)
 * @returns Relative time string
 */
export function getRelativeTime(
  date: Date | string | number,
  relativeTo: Date = new Date()
): string {
  const dateObj = new Date(date)
  const relativeObj = new Date(relativeTo)
  
  if (isNaN(dateObj.getTime()) || isNaN(relativeObj.getTime())) {
    throw new Error('Invalid date provided to getRelativeTime')
  }

  const diffInSeconds = Math.floor((relativeObj.getTime() - dateObj.getTime()) / 1000)
  
  if (diffInSeconds < 60) return 'just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`
  
  return formatDate(dateObj, 'short')
}

/**
 * @description Validates if a date of birth indicates the user is at least 13 years old
 * @param dateOfBirth - Date of birth to validate
 * @returns True if user is at least 13 years old
 */
export function isValidAge(dateOfBirth: Date | string): boolean {
  const birthDate = new Date(dateOfBirth)
  
  if (isNaN(birthDate.getTime())) {
    return false
  }

  const today = new Date()
  const age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  const dayDiff = today.getDate() - birthDate.getDate()

  // Check if birthday has occurred this year
  const hasHadBirthdayThisYear = monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)
  const actualAge = hasHadBirthdayThisYear ? age : age - 1

  return actualAge >= 13
}

/**
 * @description Converts UTC date to local timezone
 * @param utcDate - UTC date string or Date object
 * @returns Local date object
 */
export function utcToLocal(utcDate: Date | string): Date {
  const date = new Date(utcDate)
  
  if (isNaN(date.getTime())) {
    throw new Error('Invalid UTC date provided')
  }

  return new Date(date.getTime() + date.getTimezoneOffset() * 60000)
}

/**
 * @description Converts local date to UTC
 * @param localDate - Local date object
 * @returns UTC date object
 */
export function localToUtc(localDate: Date): Date {
  return new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000)
}

/**
 * @description Gets the start of day for a given date
 * @param date - Date to get start of day for
 * @returns Date object at start of day (00:00:00)
 */
export function getStartOfDay(date: Date | string = new Date()): Date {
  const dateObj = new Date(date)
  dateObj.setHours(0, 0, 0, 0)
  return dateObj
}

/**
 * @description Gets the end of day for a given date
 * @param date - Date to get end of day for
 * @returns Date object at end of day (23:59:59.999)
 */
export function getEndOfDay(date: Date | string = new Date()): Date {
  const dateObj = new Date(date)
  dateObj.setHours(23, 59, 59, 999)
  return dateObj
}

/**
 * @description Checks if two dates are the same day
 * @param date1 - First date
 * @param date2 - Second date
 * @returns True if dates are on the same day
 */
export function isSameDay(date1: Date | string, date2: Date | string): boolean {
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  )
}

export default {
  formatDate,
  getRelativeTime,
  isValidAge,
  utcToLocal,
  localToUtc,
  getStartOfDay,
  getEndOfDay,
  isSameDay,
} 