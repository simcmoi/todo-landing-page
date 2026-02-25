import { motion } from "framer-motion"
import { Download, Github, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium">
              <Zap className="h-4 w-4" />
              <span>Workflow ultra-rapide</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Todo Overlay
            </h1>
            
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              L'application de to-do la plus efficace. Shift+Space pour affichage instantané.
              <br />
              Gestion multi-listes, labels, sous-tâches illimitées et rappels.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg">
              <Download />
              Télécharger pour macOS
            </Button>
            
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/simonfessy/todo-overlay" target="_blank" rel="noopener noreferrer">
                <Github />
                Voir sur GitHub
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 w-full max-w-5xl"
          >
            <div className="relative rounded-xl border bg-card shadow-lg overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Screenshot / Demo Video</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
