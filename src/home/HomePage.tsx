import { CustomHeader } from "./components/CustomHeader"
import { CustomTitle } from "./components/CustomTitle"
import { CustomAbout } from "./components/CustomAbout"
import { CustomSkillSection } from "./components/CustomSkillSection"
import { CustomExperience } from "./components/CustomExperience"
import { CustomContact } from "./components/CustomContact"
import { CustomFooter } from "./components/CustomFooter"
import { CustomCoursesCertifies } from "./components/CustomCoursesCertifies"


export const HomePage = () => {


    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <CustomHeader />

            {/* Section */}
            <CustomTitle />

            {/* About Section */}
            <CustomAbout />

            {/* Skills Section */}
            <CustomSkillSection />

            {/* Experience Section */}
            <CustomExperience />

            {/* Courses and Certifies */}
            <CustomCoursesCertifies />

            {/* Contact Section */}
            <CustomContact />

            {/* Footer */}
            <CustomFooter />

        </div>
    )
}
