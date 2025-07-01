import { Activity, Trophy, Users } from "lucide-react"

export default function Features  ()  {
  return (
    <div>
          <div className="bg-background-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2  text-black">Personalized Training</h3>
              <p className="text-onBackground">Custom workout plans tailored to your specific goals and fitness level.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2  text-black">Expert Trainers</h3>
              <p className="text-onBackground">Get guidance from certified fitness professionals who care about your success.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Track Progress</h3>
              <p className="text-onBackground">Monitor your achievements and stay motivated with detailed progress tracking.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}