"use client"

import * as React from "react"
import { CirclePlus, Command, Eye, File, Inbox, Settings, Trash2 } from "lucide-react"

import { NavUser } from "@/components/nav-user"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "",
  },
  navMain: [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      isActive: true,
    },
    {
      title: "Add",
      url: "#",
      icon: CirclePlus,
      isActive: false,
    }
  ],
  mails: [
    {
      name: "William Smith",
      email: "williamsmith@example.com",
      subject: "Meeting Tomorrow",
      date: "09:34 AM",
      teaser:
        "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
    },
    {
      name: "Alice Smith",
      email: "alicesmith@example.com",
      subject: "Re: Project Update",
      date: "Yesterday",
      teaser:
        "Thanks for the update. The progress looks great so far.\nLet's schedule a call to discuss the next steps.",
    },
    {
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      subject: "Weekend Plans",
      date: "2 days ago",
      teaser:
        "Hey everyone! I'm thinking of organizing a team outing this weekend.\nWould you be interested in a hiking trip or a beach day?",
    },
    {
      name: "Emily Davis",
      email: "emilydavis@example.com",
      subject: "Re: Question about Budget",
      date: "2 days ago",
      teaser:
        "I've reviewed the budget numbers you sent over.\nCan we set up a quick call to discuss some potential adjustments?",
    },
    {
      name: "Michael Wilson",
      email: "michaelwilson@example.com",
      subject: "Important Announcement",
      date: "1 week ago",
      teaser:
        "Please join us for an all-hands meeting this Friday at 3 PM.\nWe have some exciting news to share about the company's future.",
    },
    {
      name: "Sarah Brown",
      email: "sarahbrown@example.com",
      subject: "Re: Feedback on Proposal",
      date: "1 week ago",
      teaser:
        "Thank you for sending over the proposal. I've reviewed it and have some thoughts.\nCould we schedule a meeting to discuss my feedback in detail?",
    },
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "subject": "Project Update",
      "date": "2 days ago",
      "teaser": "Here's the latest update on the project. Let me know if you have any questions or need further details."
    },
    {
      "name": "Alice Johnson",
      "email": "alicej@example.com",
      "subject": "Meeting Reminder",
      "date": "3 days ago",
      "teaser": "Just a quick reminder about our meeting tomorrow at 10 AM. Looking forward to our discussion!"
    },
    {
      "name": "Michael Smith",
      "email": "michaels@example.com",
      "subject": "Re: Budget Approval",
      "date": "5 days ago",
      "teaser": "I've reviewed the budget proposal and have a few suggestions.\nCan we discuss this during our next meeting?"
    },
    {
      "name": "Emily Davis",
      "email": "emilyd@example.com",
      "subject": "New Project Opportunity",
      "date": "4 days ago",
      "teaser": "I came across an interesting project opportunity that aligns with our goals.\nLet's discuss this further."
    },
    {
      "name": "David Wilson",
      "email": "davidw@example.com",
      "subject": "Re: Quarterly Report",
      "date": "1 week ago",
      "teaser": "I've completed the quarterly report. Please review it and let me know if any changes are needed."
    },
    {
      "name": "Laura Martinez",
      "email": "lauram@example.com",
      "subject": "Re: Team Building Event",
      "date": "2 weeks ago",
      "teaser": "The team-building event is scheduled for next Friday. Please confirm your availability."
    },
    {
      "name": "James Anderson",
      "email": "jamesa@example.com",
      "subject": "Re: Client Feedback",
      "date": "3 days ago",
      "teaser": "The client has provided some feedback on the latest deliverable.\nLet's discuss how to address their concerns."
    },
    {
      "name": "Sophia Taylor",
      "email": "sophiat@example.com",
      "subject": "Re: New Hire Onboarding",
      "date": "1 week ago",
      "teaser": "The onboarding process for the new hire is complete.\nLet me know if there's anything else they need."
    },
    {
      "name": "Daniel Thomas",
      "email": "danielt@example.com",
      "subject": "Re: Marketing Campaign",
      "date": "4 days ago",
      "teaser": "The marketing campaign is live. Let's monitor the performance and adjust as needed."
    },
    {
      "name": "Olivia White",
      "email": "oliviaw@example.com",
      "subject": "Re: Product Launch",
      "date": "2 weeks ago",
      "teaser": "The product launch is scheduled for next month. Let's finalize the details."
    },
    {
      "name": "William Harris",
      "email": "williamh@example.com",
      "subject": "Re: Training Session",
      "date": "5 days ago",
      "teaser": "The training session is set for next week. Please confirm your attendance."
    },
    {
      "name": "Ava Martin",
      "email": "avam@example.com",
      "subject": "Re: Website Redesign",
      "date": "3 days ago",
      "teaser": "The website redesign is progressing well. Let's review the latest mockups."
    },
    {
      "name": "Ethan Clark",
      "email": "ethanc@example.com",
      "subject": "Re: Sales Strategy",
      "date": "1 week ago",
      "teaser": "I've outlined a new sales strategy. Let's discuss it during our next meeting."
    },
    {
      "name": "Mia Rodriguez",
      "email": "miar@example.com",
      "subject": "Re: Customer Feedback",
      "date": "4 days ago",
      "teaser": "We've received some valuable customer feedback. Let's incorporate it into our plans."
    },
    {
      "name": "Noah Lewis",
      "email": "noahl@example.com",
      "subject": "Re: Budget Review",
      "date": "2 days ago",
      "teaser": "The budget review is complete. Let's discuss the findings and next steps."
    },
    {
      "name": "Isabella Lee",
      "email": "isabellal@example.com",
      "subject": "Re: New Partnership",
      "date": "1 week ago",
      "teaser": "I've identified a potential new partnership. Let's explore this opportunity further."
    },
    {
      "name": "Liam Walker",
      "email": "liamw@example.com",
      "subject": "Re: Project Timeline",
      "date": "3 days ago",
      "teaser": "The project timeline has been updated. Please review it and let me know your thoughts."
    },
    {
      "name": "Charlotte Hall",
      "email": "charlotteh@example.com",
      "subject": "Re: Team Meeting",
      "date": "5 days ago",
      "teaser": "The team meeting is scheduled for tomorrow. Let's go over the agenda."
    },
    {
      "name": "Benjamin Young",
      "email": "benjaminy@example.com",
      "subject": "Re: Product Feedback",
      "date": "2 weeks ago",
      "teaser": "We've gathered feedback on the new product. Let's discuss how to improve it."
    },
    {
      "name": "Amelia King",
      "email": "ameliak@example.com",
      "subject": "Re: Marketing Strategy",
      "date": "4 days ago",
      "teaser": "The marketing strategy is ready for review. Let's finalize it this week."
    },
    {
      "name": "Lucas Green",
      "email": "lucasg@example.com",
      "subject": "Re: Client Meeting",
      "date": "3 days ago",
      "teaser": "The client meeting is set for next Monday. Let's prepare the presentation."
    },
    {
      "name": "Harper Adams",
      "email": "harpera@example.com",
      "subject": "Re: New Feature Launch",
      "date": "1 week ago",
      "teaser": "The new feature is ready for launch. Let's coordinate the release plan."
    },
    {
      "name": "Mason Scott",
      "email": "masons@example.com",
      "subject": "Re: Performance Review",
      "date": "2 days ago",
      "teaser": "The performance review is complete. Let's discuss the results and next steps."
    },
    {
      "name": "Evelyn Baker",
      "email": "evelynb@example.com",
      "subject": "Re: Training Program",
      "date": "5 days ago",
      "teaser": "The training program is finalized. Let's schedule the sessions."
    },
    {
      "name": "Logan Nelson",
      "email": "logann@example.com",
      "subject": "Re: Project Update",
      "date": "3 days ago",
      "teaser": "Here's the latest update on the project. Let me know if you have any questions."
    },
    {
      "name": "Abigail Carter",
      "email": "abigailc@example.com",
      "subject": "Re: New Initiative",
      "date": "1 week ago",
      "teaser": "I've proposed a new initiative. Let's discuss it during our next meeting."
    },
    {
      "name": "Alexander Mitchell",
      "email": "alexanderm@example.com",
      "subject": "Re: Budget Proposal",
      "date": "4 days ago",
      "teaser": "The budget proposal is ready for review. Let's go over it together."
    },
    {
      "name": "Ella Perez",
      "email": "ellap@example.com",
      "subject": "Re: Team Feedback",
      "date": "2 days ago",
      "teaser": "The team has provided feedback on the new process. Let's discuss how to implement it."
    },
    {
      "name": "Jackson Roberts",
      "email": "jacksonr@example.com",
      "subject": "Re: Project Deadline",
      "date": "3 days ago",
      "teaser": "The project deadline is approaching. Let's ensure everything is on track."
    }
  ],
}


export function AppSidebar({ ...props }) {
  const [activeItem, setActiveItem] = React.useState({
    title: "App",
    url: "/",
    icon: Command,
    isActive: true
  })
  const [mails, setMails] = React.useState(data.mails)
  const { setOpen } = useSidebar()
  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row border-x rounded-r-md"
      {...props}
    >
      <Sidebar
        collapsible="none"
        className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
      >
        <SidebarHeader className="border-t">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="justify-center">
                <a href="#" onClick={() => {
                        setActiveItem({
                          title: "App",
                          url: "#",
                          icon: Command,
                          isActive: true,
                        })
                        const mail = data.mails.sort(() => Math.random() - 0.5)
                        setMails(
                          mail.slice(
                            0,
                            Math.max(5, Math.floor(Math.random() * 10) + 1)
                          )
                        )
                        setOpen(true)
                      }}>
                  <div className="flex aspect-square size-12 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Command className="size-6" />
                  </div>
                  
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title} >
                    <SidebarMenuButton 
                      variant="default"
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item)
                        const mail = data.mails.sort(() => Math.random() - 0.5)
                        setMails(
                          mail.slice(
                            0,
                            Math.max(5, Math.floor(Math.random() * 10) + 1)
                          )
                        )
                        setOpen(true)
                      }}
                      isActive={activeItem.title === item.title}
                      className="justify-center"
                    >
                      <item.icon />
                      
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="border-b">
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>

      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-y p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-base font-medium text-foreground">
              {activeItem.title}
            </div>
          </div>
          <SidebarInput placeholder="Type to search..." />
        </SidebarHeader>
        <SidebarContent className="border-b">
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {mails.map((mail) => (
                <div
                  href="#"
                  key={mail.email}
                  className="flex flex-col w-full items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <div className="flex w-full items-center gap-2">
                    <span>{mail.name}</span>{" "}
                    <span className="ml-auto text-xs">{mail.date}</span>
                  </div>
                </div>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent >
      </Sidebar>
    </Sidebar>
  )
}
