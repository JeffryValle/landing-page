import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Separator } from "@radix-ui/react-separator"
import { CircleCheckBig } from "lucide-react"
import { useState } from "react"

interface Props {
    title: string;
    subtitle: string;
    description: string;
}

export const CustomExperienceCard = ({ title, subtitle, description }: Props) => {

    const [isActive, setIsActive] = useState<boolean>(true)

    return (
        <>
            <Separator className="my-1" />
            <Card className="bg-slate-800">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-white tracking-wider">{title}</CardTitle>
                            <CardDescription className="text-white tracking-wider">{subtitle}</CardDescription>
                        </div>
                        {
                            isActive ? (
                                <CircleCheckBig className="cursor-pointer w-8 h-8 bg-blue-500 text-white dark:bg-blue-600 rounded-full" onClick={() => setIsActive(!isActive)} />)

                                : (<CircleCheckBig className="cursor-pointer w-8 h-8 bg-white text-white rounded-full" onClick={() => setIsActive(!isActive)} />)
                        }
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-white tracking-wider mb-4text-white">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {/* <Badge className="w-8 h-8 bg-blue-500 text-white dark:bg-blue-600 rounded-full">
                                            <CircleCheckBig></CircleCheckBig>
                                        </Badge>
                                        <Badge>Next.js</Badge>
                                        <Badge>TypeScript</Badge>
                                        <Badge>AWS</Badge> */}
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
