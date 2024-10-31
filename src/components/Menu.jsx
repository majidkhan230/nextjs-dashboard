import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Menu = () => {
    const menuItems = [
        {
          title: "MENU",
          items: [
            {
              icon: "/home.png",
              label: "Home",
              href: "/",
              visible: ["admin", "teacher", "student", "parent"],
            },
            {
              icon: "/teacher.png",
              label: "Teachers",
              href: "/list/teachers",
              visible: ["admin", "teacher"],
            },
            {
              icon: "/student.png",
              label: "Students",
              href: "/list/students",
              visible: ["admin", "teacher"],
            },
            {
              icon: "/parent.png",
              label: "Parents",
              href: "/list/parents",
              visible: ["admin", "teacher"],
            },
            {
              icon: "/subject.png",
              label: "Subjects",
              href: "/list/subjects",
              visible: ["admin"],
            },
            {
              icon: "/class.png",
              label: "Classes",
              href: "/list/classes",
              visible: ["admin", "teacher"],
            },
            {
              icon: "/lesson.png",
              label: "Lessons",
              href: "/list/lessons",
              visible: ["admin", "teacher"],
            },
            {
              icon: "/exam.png",
              label: "Exams",
              href: "/list/exams",
              visible: ["admin", "teacher", "student", "parent"],
            },
            {
              icon: "/assignment.png",
              label: "Assignments",
              href: "/list/assignments",
              visible: ["admin", "teacher", "student", "parent"],
            },
            {
              icon: "/result.png",
              label: "Results",
              href: "/list/results",
              visible: ["admin", "teacher", "student", "parent"],
            },
            {
              icon: "/attendance.png",
              label: "Attendance",
              href: "/list/attendance",
              visible: ["admin", "teacher", "student", "parent"],
            },
            {
              icon: "/calendar.png",
              label: "Events",
              href: "/list/events",
              visible: ["admin", "teacher", "student", "parent"],
            },
            {
              icon: "/message.png",
              label: "Messages",
              href: "/list/messages",
              visible: ["admin", "teacher", "student", "parent"],
            },
            {
              icon: "/announcement.png",
              label: "Announcements",
              href: "/list/announcements",
              visible: ["admin", "teacher", "student", "parent"],
            },
          ],
        },
        {
          title: "OTHER",
          items: [
            {
              icon: "/profile.png",
              label: "Profile",
              href: "/profile",
              visible: ["admin", "teacher", "student", "parent"],
            },
            {
              icon: "/setting.png",
              label: "Settings",
              href: "/settings",
              visible: ["admin", "teacher", "student", "parent"],
            },
            {
              icon: "/logout.png",
              label: "Logout",
              href: "/logout",
              visible: ["admin", "teacher", "student", "parent"],
            },
          ],
        },
      ];
  return (
    <div>
        {
            menuItems.map(({items,title},index)=>{
               
                return(
                    <div key={index}>
                        <span className='hidden md:block text-gray-400 font-light text-sm px-1 py-1 '>{title}</span>
                       {items.map(({icon,label,href,visible},index)=>{
                        return (
                           <Link href={href} key={index} className='flex justify-center items-center lg:justify-start gap-2 px-1 py-1  text-sm hover:bg-gray-200 hover:rounded-md '>  
                           <Image src={icon} alt='img' width={16} height={16}></Image>
                           <span className='hidden lg:block'>{label}</span>
                            </Link>
                        )
                       })}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Menu