import { ModeToggle } from "@/components/mode-toggle";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full">
      <div className="h-full w-1/2" style={{ background: "linear-gradient(135deg, #FFA500, #FF6347)" }}>
      <div className="absolute bottom-10 left-10 text-left">
          <h2 className="text-5xl font-bold">StudyBuddy</h2>
          <p className="text-4xl">Dive Into Learning</p>
        </div>
      </div>
      
      <div className="h-full w-1/2 flex justify-center items-center bg-secondary">
        <div className="absolute top-4 right-4 bg-secondary py-2 px-4 rounded">
          <ModeToggle />
        </div>        
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
