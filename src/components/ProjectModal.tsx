// src/components/ProjectModal.tsx
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import type { Project } from '../data/projects'; // Importando nosso "molde" de projeto

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-lg bg-light-bg dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all font-sans">
                <Dialog.Title as="h3" className="text-3xl font-serif font-bold leading-6 text-light-text dark:text-dark-text">
                  {project.title}
                </Dialog.Title>
                <div className="mt-4">
                  <img src={project.imageUrl} alt={`Imagem do projeto ${project.title}`} className="w-full h-auto rounded-md mb-4" />
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span key={tech} className="font-sans text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className=" flex justify-end gap-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-accent/20 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/30 focus:outline-none"
                    onClick={onClose}
                  >
                    Fechar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}