import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Props {
    title: string;
    subtitle: string;
}

export const CustomAboutCard = ({ title = '', subtitle = '' }: Props) => {
    return (
        <Card
            className="bg-slate-700"
        >
            <CardHeader>
                <CardTitle
                    className="text-lg text-white tracking-wider"
                >{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-white text-sm tracking-wider">
                    {subtitle}
                </p>
            </CardContent>
        </Card>
    )
}
