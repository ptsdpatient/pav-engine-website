export let panel_data = [
		{
			name: 'Get Started',
			id: '0',
			active: false,
			child: [
				{
					name: 'Clone Repository',
					id: '1',
					value: 'Clone the official Game Engine repository using Git.'
				},
				{
					name: 'Setup Gradle',
					id: '2',
					value: 'Configure Gradle dependencies for desktop, Android, and web targets.'
				},
				{
					name: 'Plan Your Project',
					id: '3',
					value: 'Decide your game genre, assets, and core mechanics.'
				}
			]
		},
		{
			name: 'Basics',
			id: '1',
			active: false,
			child: [
				{
					name: 'Understanding Scenes',
					id: '4',
					value: 'Scenes are modular containers for rendering and logic.'
				},
				{
					name: 'Input Handling',
					id: '5',
					value: 'Learn to process keyboard, mouse, and controller input.'
				},
				{
					name: 'Game Loop',
					id: '6',
					value: 'Update → Render → Repeat — the core of every game.'
				}
			]
		},
		{
			name: 'Graphics & Rendering',
			id: '2',
			active: false,
			child: [
				{
					name: 'Textures & Sprites',
					id: '7',
					value: 'Load textures and display them efficiently on screen.'
				},
				{
					name: '3D Models',
					id: '8',
					value: 'Import and render .g3dj or .obj models from Blender.'
				},
				{
					name: 'Cameras',
					id: '9',
					value: 'Set up perspective or orthographic camera views.'
				}
			]
		},
		{
			name: 'Physics',
			id: '3',
			active: false,
			child: [
				{
					name: 'Rigid Bodies',
					id: '10',
					value: 'Simulate realistic object motion using Bullet Physics.'
				},
				{
					name: 'Collisions',
					id: '11',
					value: 'Detect and respond to object collisions in 2D and 3D.'
				},
				{
					name: 'Forces & Gravity',
					id: '12',
					value: 'Apply forces, impulses, and custom gravity effects.'
				}
			]
		},
		{
			name: 'Audio',
			id: '4',
			active: false,
			child: [
				{
					name: 'Sound Effects',
					id: '13',
					value: 'Load and play .wav or .ogg sound effects.'
				},
				{
					name: 'Background Music',
					id: '14',
					value: 'Add immersive soundtracks and loops.'
				}
			]
		},
		{
			name: 'UI & HUD',
			id: '5',
			active: false,
			child: [
				{
					name: 'UI Elements',
					id: '15',
					value: 'Create menus, buttons, and overlays using Svelte components.'
				},
				{
					name: 'HUD',
					id: '16',
					value: 'Display health, score, or map information dynamically.'
				}
			]
		},
		{
			name: 'Build & Deploy',
			id: '6',
			active: false,
			child: [
				{
					name: 'Desktop Build',
					id: '17',
					value: 'Package your game for Windows, macOS, and Linux.'
				},
				{
					name: 'Android Deployment',
					id: '18',
					value: 'Export and run your game on Android devices.'
				},
				{
					name: 'Web Build',
					id: '19',
					value: 'Export HTML5 builds and host them on itch.io or Netlify.'
				}
			]
		}
	];