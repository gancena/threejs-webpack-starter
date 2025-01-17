! function e(t, i, n)
{
	function r(a, o)
	{
		if (!i[a])
		{
			if (!t[a])
			{
				var u = "function" == typeof require && require;
				if (!o && u) return u(a, !0);
				if (s) return s(a, !0);
				var h = new Error("Cannot find module '" + a + "'");
				throw h.code = "MODULE_NOT_FOUND", h
			}
			var l = i[a] = {
				exports:
				{}
			};
			t[a][0].call(l.exports, function (e)
			{
				var i = t[a][1][e];
				return r(i || e)
			}, l, l.exports, e, t, i, n)
		}
		return i[a].exports
	}
	for (var s = "function" == typeof require && require, a = 0; a < n.length; a++) r(n[a]);
	return r
}(
{
	1: [function (e, t, i)
	{
		"use strict";
		var n = e("../loader"),
			r = e("./system");
		window.demoNum = 4;
		new n(r)
	},
	{
		"../loader": 4,
		"./system": 3
	}],
	2: [function (e, t, i)
	{
		"use strict";
		var n = function ()
			{
				function e(e, t)
				{
					for (var i = 0; i < t.length; i++)
					{
						var n = t[i];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function (t, i, n)
				{
					return i && e(t.prototype, i), n && e(t, n), t
				}
			}(),
			r = e("../particle-base"),
			s = e("../utils/osc"),
			a = function (e)
			{
				function t(e, i, n)
				{
					! function (e, t)
					{
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var r = function (e, t)
					{
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i, n));
					return r.radius = e.radius, r.order = e.order, r.alternate = e.alternate, r.osc = new s(r.order, .015, !0, !1), r.reset(), r
				}
				return function (e, t)
				{
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype,
					{
						constructor:
						{
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, r), n(t, [
				{
					key: "reset",
					value: function ()
					{
						(function e(t, i, n)
						{
							null === t && (t = Function.prototype);
							var r = Object.getOwnPropertyDescriptor(t, i);
							if (void 0 === r)
							{
								var s = Object.getPrototypeOf(t);
								return null === s ? void 0 : e(s, i, n)
							}
							if ("value" in r) return r.value;
							var a = r.get;
							if (void 0 !== a) return a.call(n)
						})(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "reset", this).call(this), this.osc.reset()
					}
				},
				{
					key: "update",
					value: function ()
					{
						this.osc.update(this.loader.timescale);
						var e = this.calc.map(this.order, 0, 1, -Math.cos(.0015 * this.loader.elapsedMilliseconds) * (1.5 * Math.PI), Math.sin(.0015 * this.loader.elapsedMilliseconds) * (1.5 * Math.PI));
						e += this.alternate ? Math.PI : 0;
						var t = Math.cos(e) * this.radius,
							i = this.calc.map(this.order, 0, 1, -this.system.height, this.system.height),
							n = Math.sin(e) * this.radius;
						this.mesh.position.x = t, this.mesh.position.y = i, this.mesh.position.z = n;
						var r = .1 + .2 * this.osc.val(this.ease.inOutExpo);
						this.alternate && (r = .1 + .2 * (1 - this.osc.val(this.ease.inOutExpo))), this.mesh.scale.set(r, r, r)
					}
				}]), t
			}();
		t.exports = a
	},
	{
		"../particle-base": 5,
		"../utils/osc": 10
	}],
	3: [function (e, t, i)
	{
		"use strict";
		var n = function ()
			{
				function e(e, t)
				{
					for (var i = 0; i < t.length; i++)
					{
						var n = t[i];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function (t, i, n)
				{
					return i && e(t.prototype, i), n && e(t, n), t
				}
			}(),
			r = e("../system-base"),
			s = e("./particle"),
			a = function (e)
			{
				function t(e)
				{
					! function (e, t)
					{
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var i = function (e, t)
					{
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					i.duration = 5500, i.lines = [], i.count = 24, i.height = 10;
					for (var n = 0; n < i.count; n++) i.particles.push(new s(
					{
						group: i.particleGroup,
						order: n / (i.count - 1),
						alternate: !1,
						color: 16777215,
						opacity: 1,
						size: .1,
						radius: 4
					}, i, i.loader)), i.particles.push(new s(
					{
						group: i.particleGroup,
						order: n / (i.count - 1),
						alternate: !0,
						color: 16777215,
						opacity: 1,
						size: .1,
						radius: 4
					}, i, i.loader));
					for (var r = new THREE.LineBasicMaterial(
						{
							color: 16777215,
							opacity: .5,
							transparent: !0
						}), a = 0; a < i.count; a++)
					{
						var o = new THREE.Geometry;
						o.vertices.push(new THREE.Vector3, new THREE.Vector3);
						var u = new THREE.Line(o, r);
						i.particleGroup.add(u), i.lines.push(u)
					}
					return i
				}
				return function (e, t)
				{
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype,
					{
						constructor:
						{
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, r), n(t, [
				{
					key: "update",
					value: function ()
					{
						(function e(t, i, n)
						{
							null === t && (t = Function.prototype);
							var r = Object.getOwnPropertyDescriptor(t, i);
							if (void 0 === r)
							{
								var s = Object.getPrototypeOf(t);
								return null === s ? void 0 : e(s, i, n)
							}
							if ("value" in r) return r.value;
							var a = r.get;
							if (void 0 !== a) return a.call(n)
						})(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "update", this).call(this);
						for (var e = this.particles.length; e--;) this.particles[e].update();
						for (var i = this.lines.length; i--;)
						{
							var n = this.particles[2 * i],
								r = this.particles[2 * i + 1],
								s = this.lines[i];
							s.geometry.vertices[0].x = n.mesh.position.x, s.geometry.vertices[0].y = n.mesh.position.y, s.geometry.vertices[0].z = n.mesh.position.z, s.geometry.vertices[1].x = r.mesh.position.x, s.geometry.vertices[1].y = r.mesh.position.y, s.geometry.vertices[1].z = r.mesh.position.z, s.geometry.verticesNeedUpdate = !0
						}
						this.particleGroup.rotation.z = Math.sin(.0015 * this.loader.elapsedMilliseconds) * Math.PI * .25, !this.exiting || this.loader.isOrbit || this.loader.isGrid || (this.loader.camera.position.z = this.loader.cameraBaseZ - this.ease.inExpo(this.exitProgress, 0, 1, 1) * this.loader.cameraBaseZ)
					}
				}]), t
			}();
		t.exports = a
	},
	{
		"../system-base": 6,
		"./particle": 2
	}],
	4: [function (e, t, i)
	{
		"use strict";
		var n = function ()
			{
				function e(e, t)
				{
					for (var i = 0; i < t.length; i++)
					{
						var n = t[i];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function (t, i, n)
				{
					return i && e(t.prototype, i), n && e(t, n), t
				}
			}(),
			r = e("./utils/calc"),
			s = e("./utils/ease"),
			a = e("./utils/axis"),
			o = function ()
			{
				function e(t)
				{
					! function (e, t)
					{
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.calc = new r, this.ease = new s, this.dom = {
						html: document.documentElement,
						container: document.querySelector(".loader"),
						timescaleWrap: document.querySelector(".timescale-wrap"),
						timescaleRange: document.querySelector(".timescale-range"),
						timescaleValue: document.querySelector(".timescale-value"),
						replayButton: document.querySelector(".replay-animation"),
						debugButton: document.querySelector(".icon--debug")
					}, this.dom.html.classList.add("loading"), this.completed = !1, this.raf = null, this.setupDebug(), this.setupTime(), this.setupScene(), this.setupCamera(), this.setupRenderer(), this.setupControls(), this.setupHelpers(), this.listen(), this.onResize(), this.system = new t(this), this.loop()
				}
				return n(e, [
				{
					key: "setupDebug",
					value: function ()
					{
						var e = this;
						this.isDebug = location.hash.indexOf("debug") > 0, this.isGrid = location.hash.indexOf("grid") > 0, this.isOrbit = location.hash.indexOf("orbit") > 0, this.debugHash = "", this.isDebug ? (this.isGrid = !0, this.isOrbit = !0, this.debugHash += "debug", this.dom.html.classList.add("is-debug")) : (this.debugHash += this.isGrid ? "grid" : "", this.debugHash += this.isOrbit ? "orbit" : ""), this.debugHash && [].slice.call(document.querySelectorAll(".demo")).forEach(function (t, i, n)
						{
							t.setAttribute("href", t.getAttribute("href") + "#" + e.debugHash)
						})
					}
				},
				{
					key: "setupTime",
					value: function ()
					{
						this.timescale = 1, this.clock = new THREE.Clock, this.deltaTimeSeconds = this.clock.getDelta() * this.timescale, this.deltaTimeMilliseconds = 1e3 * this.deltaTimeSeconds, this.deltaTimeNormal = this.deltaTimeMilliseconds / (1e3 / 60), this.elapsedMilliseconds = 0
					}
				},
				{
					key: "setupScene",
					value: function ()
					{
						this.scene = new THREE.Scene
					}
				},
				{
					key: "setupCamera",
					value: function ()
					{
						this.camera = new THREE.PerspectiveCamera(100, 0, 1e-4, 1e4), this.cameraBaseX = this.isGrid ? -20 : 0, this.cameraBaseY = this.isGrid ? 15 : 0, this.cameraBaseZ = this.isGrid ? 20 : 30, this.camera.position.x = this.cameraBaseX, this.camera.position.y = this.cameraBaseY, this.camera.position.z = this.cameraBaseZ
					}
				},
				{
					key: "setupRenderer",
					value: function ()
					{
						this.renderer = new THREE.WebGLRenderer(
						{
							alpha: !0,
							antialias: !0
						}), this.dom.container.appendChild(this.renderer.domElement)
					}
				},
				{
					key: "setupControls",
					value: function ()
					{
						this.isOrbit && (this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = .2, this.controls.enableKeys = !1, this.dom.timescaleWrap.style.visibility = "visible")
					}
				},
				{
					key: "setupHelpers",
					value: function ()
					{
						this.isGrid && (this.gridOpacityMap = [.4, .2, .2, .2, .1, .2, .1, .1], this.gridHelper = new THREE.GridHelper(300, 60, 16777215, 16777215), this.gridHelper.material.transparent = !0, this.gridHelper.material.opacity = this.gridOpacityMap[demoNum - 1], this.scene.add(this.gridHelper), this.axisOpacityMap = [1, .6, .6, .6, .3, .6, .3, .3], this.axisHelper = new a(150, this.axisOpacityMap[demoNum - 1]), this.scene.add(this.axisHelper), this.camera.lookAt(new THREE.Vector3))
					}
				},
				{
					key: "update",
					value: function ()
					{
						this.deltaTimeSeconds = this.clock.getDelta(), this.diffTime && (this.deltaTimeSeconds -= this.diffTime, this.diffTime = 0), this.deltaTimeSeconds *= this.timescale, this.deltaTimeMilliseconds = 1e3 * this.deltaTimeSeconds, this.deltaTimeNormal = this.deltaTimeMilliseconds / (1e3 / 60), this.elapsedMilliseconds += this.deltaTimeMilliseconds, this.system.update(), this.isOrbit && this.controls.update()
					}
				},
				{
					key: "render",
					value: function ()
					{
						this.renderer.render(this.scene, this.camera)
					}
				},
				{
					key: "listen",
					value: function ()
					{
						var e = this;
						window.addEventListener("resize", function (t)
						{
							return e.onResize(t)
						}), this.dom.replayButton.addEventListener("click", function (t)
						{
							return e.onReplayButtonClick(t)
						}), this.dom.debugButton.addEventListener("click", function (t)
						{
							return e.onDebugButtonClick(t)
						}), this.isOrbit && (this.dom.timescaleRange.addEventListener("change", function (t)
						{
							return e.onTimescaleRangeChange(t)
						}), this.dom.timescaleRange.addEventListener("mousemove", function (t)
						{
							return e.onTimescaleRangeChange(t)
						})), this.hidden = null, this.visibilityChange = null, void 0 !== document.hidden ? (this.hidden = "hidden", this.visibilityChange = "visibilitychange") : void 0 !== document.msHidden ? (this.hidden = "msHidden", this.visibilityChange = "msvisibilitychange") : void 0 !== document.webkitHidden && (this.hidden = "webkitHidden", this.visibilityChange = "webkitvisibilitychange"), void 0 === document.addEventListener || void 0 === document.hidden || window.addEventListener(this.visibilityChange, function (t)
						{
							return e.onVisibilityChange(t)
						})
					}
				},
				{
					key: "replay",
					value: function ()
					{
						document.documentElement.classList.remove("completed"), document.documentElement.classList.add("loading"), this.camera.position.x = this.cameraBaseX, this.camera.position.y = this.cameraBaseY, this.camera.position.z = this.cameraBaseZ, this.timescale = 1, this.deltaTimeSeconds = 1 / 60, this.deltaTimeMilliseconds = 1e3 * this.deltaTimeSeconds, this.deltaTimeNormal = this.deltaTimeMilliseconds / (1e3 / 60), this.elapsedMilliseconds = 0, this.blurTime = 0, this.diffTime = 0, this.focusTime = 0, this.system.replay(), this.completed = !1, this.clock.start(), this.loop()
					}
				},
				{
					key: "complete",
					value: function ()
					{
						var e = this;
						this.isOrbit || this.isGrid || (setTimeout(function ()
						{
							e.clock.stop(), cancelAnimationFrame(e.raf)
						}, 600), this.completed = !0, this.dom.html.classList.remove("loading"), this.dom.html.classList.add("completed"))
					}
				},
				{
					key: "onResize",
					value: function ()
					{
						this.width = window.innerWidth, this.height = window.innerHeight, this.dpr = window.devicePixelRatio > 1 ? 2 : 1, this.camera.aspect = this.width / this.height, this.camera.updateProjectionMatrix(), this.renderer.setPixelRatio(this.dpr), this.renderer.setSize(this.width, this.height)
					}
				},
				{
					key: "onReplayButtonClick",
					value: function (e)
					{
						e.preventDefault(), this.replay()
					}
				},
				{
					key: "onDebugButtonClick",
					value: function (e)
					{
						e.preventDefault();
						var t = window.location.href.split("#")[0];
						this.isDebug ? (history ? history.pushState("", document.title, window.location.pathname) : location.hash = "", location.href = t) : location.href = t + "#debug", location.reload()
					}
				},
				{
					key: "onTimescaleRangeChange",
					value: function (e)
					{
						this.timescale = parseFloat(this.dom.timescaleRange.value), this.dom.timescaleValue.innerHTML = this.timescale.toFixed(1)
					}
				},
				{
					key: "onVisibilityChange",
					value: function (e)
					{
						document.hidden ? this.blurTime = Date.now() : (this.focusTime = Date.now(), this.blurTime && (this.diffTime = (this.focusTime - this.blurTime) / 1e3))
					}
				},
				{
					key: "loop",
					value: function ()
					{
						var e = this;
						this.update(), this.render(), this.raf = window.requestAnimationFrame(function ()
						{
							return e.loop()
						})
					}
				}]), e
			}();
		t.exports = o
	},
	{
		"./utils/axis": 7,
		"./utils/calc": 8,
		"./utils/ease": 9
	}],
	5: [function (e, t, i)
	{
		"use strict";
		var n = function ()
			{
				function e(e, t)
				{
					for (var i = 0; i < t.length; i++)
					{
						var n = t[i];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function (t, i, n)
				{
					return i && e(t.prototype, i), n && e(t, n), t
				}
			}(),
			r = function ()
			{
				function e(t, i, n)
				{
					! function (e, t)
					{
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.system = i, this.loader = n, this.calc = this.loader.calc, this.ease = this.loader.ease, this.group = t.group, this.x = t.x, this.y = t.y, this.z = t.z, this.size = t.size, this.color = t.color, this.opacity = t.opacity, this.createMesh()
				}
				return n(e, [
				{
					key: "createMesh",
					value: function ()
					{
						this.geometry = this.system.sphereGeometry, this.material = new THREE.MeshBasicMaterial(
						{
							color: this.color,
							transparent: !0,
							opacity: this.opacity,
							depthTest: !1,
							precision: "lowp"
						}), this.mesh = new THREE.Mesh(this.geometry, this.material), this.mesh.position.x = this.x, this.mesh.position.y = this.y, this.mesh.position.z = this.z, this.mesh.scale.set(this.size, this.size, this.size), this.group.add(this.mesh)
					}
				},
				{
					key: "reset",
					value: function () {}
				}]), e
			}();
		t.exports = r
	},
	{}],
	6: [function (e, t, i)
	{
		"use strict";
		var n = function ()
			{
				function e(e, t)
				{
					for (var i = 0; i < t.length; i++)
					{
						var n = t[i];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function (t, i, n)
				{
					return i && e(t.prototype, i), n && e(t, n), t
				}
			}(),
			r = function ()
			{
				function e(t)
				{
					! function (e, t)
					{
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.loader = t, this.calc = this.loader.calc, this.ease = this.loader.ease, this.sphereGeometry = new THREE.SphereBufferGeometry(1, 16, 16), this.boxGeometry = new THREE.BoxBufferGeometry(1, 1, 1), this.center = new THREE.Vector3, this.particles = [], this.particleGroup = new THREE.Object3D, this.particleGroup.scale.set(1e-4, 1e-4, 1e-4), this.loader.scene.add(this.particleGroup), this.entering = !0, this.enterProgress = 0, this.enterRate = .015, this.exiting = !1, this.exitProgress = 0, this.exitRate = .01, this.duration = 1 / 0
				}
				return n(e, [
				{
					key: "update",
					value: function ()
					{
						for (var e = this.particles.length; e--;) this.particles[e].update();
						if (this.entering && this.enterProgress < 1)
						{
							this.enterProgress += this.enterRate * this.loader.deltaTimeNormal, this.enterProgress > 1 && (this.enterProgress = 1, this.entering = !1);
							var t = this.ease.inOutExpo(this.enterProgress, 0, 1, 1);
							this.particleGroup.scale.set(t, t, t)
						}!this.exiting && this.loader.elapsedMilliseconds > this.duration && (this.exiting = !0), this.exiting && (this.exitProgress += this.exitRate * this.loader.deltaTimeNormal, this.exitProgress >= 1 && !this.loader.completed && (this.exitProgress = 1, this.loader.complete()))
					}
				},
				{
					key: "replay",
					value: function ()
					{
						this.particleGroup.scale.set(1e-4, 1e-4, 1e-4);
						for (var e = this.particles.length; e--;) this.particles[e].reset();
						this.entering = !0, this.enterProgress = 0, this.exiting = !1, this.exitProgress = 0
					}
				}]), e
			}();
		t.exports = r
	},
	{}],
	7: [function (e, t, i)
	{
		"use strict";
		var n = function ()
			{
				function e(e, t)
				{
					for (var i = 0; i < t.length; i++)
					{
						var n = t[i];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function (t, i, n)
				{
					return i && e(t.prototype, i), n && e(t, n), t
				}
			}(),
			r = function ()
			{
				function e(t, i)
				{
					return function (e, t)
					{
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.object3d = new THREE.Object3D, this.axisLength = t, this.opacity = i, this.createAxis(new THREE.Vector3(-this.axisLength, 0, 0), new THREE.Vector3(this.axisLength, 0, 0), new THREE.Color("hsl(0, 100%, 100%)")), this.createAxis(new THREE.Vector3(0, -this.axisLength, 0), new THREE.Vector3(0, this.axisLength, 0), new THREE.Color("hsl(120, 100%, 100%)")), this.createAxis(new THREE.Vector3(0, 0, -this.axisLength), new THREE.Vector3(0, 0, this.axisLength), new THREE.Color("hsl(240, 100%, 100%)")), this.object3d
				}
				return n(e, [
				{
					key: "createAxis",
					value: function (e, t, i)
					{
						var n = new THREE.Geometry,
							r = new THREE.LineBasicMaterial(
							{
								color: i,
								opacity: this.opacity,
								transparent: !0
							});
						n.vertices.push(e, t);
						var s = new THREE.Line(n, r);
						this.object3d.add(s)
					}
				}]), e
			}();
		t.exports = r
	},
	{}],
	8: [function (e, t, i)
	{
		"use strict";
		var n = function ()
			{
				function e(e, t)
				{
					for (var i = 0; i < t.length; i++)
					{
						var n = t[i];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function (t, i, n)
				{
					return i && e(t.prototype, i), n && e(t, n), t
				}
			}(),
			r = function ()
			{
				function e()
				{
					! function (e, t)
					{
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e)
				}
				return n(e, [
				{
					key: "rand",
					value: function (e, t, i)
					{
						void 0 === t && (t = e, e = 0);
						var n = Math.random();
						return i && (n = i(Math.random(), 0, 1, 1)), n * (t - e) + e
					}
				},
				{
					key: "randInt",
					value: function (e, t, i)
					{
						void 0 === t && (t = e, e = 0);
						Math.random();
						return i && i(Math.random(), 0, 1, 1), Math.floor(Math.random() * (t - e + 1)) + e
					}
				},
				{
					key: "randArr",
					value: function (e)
					{
						return e[Math.floor(Math.random() * e.length)]
					}
				},
				{
					key: "map",
					value: function (e, t, i, n, r)
					{
						return (e - t) / (i - t) * (r - n) + n
					}
				},
				{
					key: "clamp",
					value: function (e, t, i)
					{
						return Math.max(Math.min(e, i), t)
					}
				},
				{
					key: "lerp",
					value: function (e, t, i)
					{
						return e + (t - e) * i
					}
				},
				{
					key: "roundToUpperInterval",
					value: function (e, t)
					{
						return e % t == 0 && (e += 1e-4), Math.ceil(e / t) * t
					}
				},
				{
					key: "roundToLowerInterval",
					value: function (e, t)
					{
						return e % t == 0 && (e -= 1e-4), Math.floor(e / t) * t
					}
				},
				{
					key: "roundToNearestInterval",
					value: function (e, t)
					{
						return Math.round(e / t) * t
					}
				},
				{
					key: "intersectSphere",
					value: function (e, t)
					{
						return Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y) + (e.z - t.z) * (e.z - t.z)) < e.radius + t.radius
					}
				},
				{
					key: "getIndexFromCoords",
					value: function (e, t, i)
					{
						return e + t * i
					}
				},
				{
					key: "getCoordsFromIndex",
					value: function (e, t)
					{
						return {
							x: e % t,
							y: Math.floor(e / t)
						}
					}
				},
				{
					key: "visibleHeightAtZDepth",
					value: function (e, t)
					{
						var i = t.position.z;
						e < i ? e -= i : e += i;
						var n = t.fov * Math.PI / 180;
						return 2 * Math.tan(n / 2) * Math.abs(e)
					}
				},
				{
					key: "visibleWidthAtZDepth",
					value: function (e, t)
					{
						return this.visibleHeightAtZDepth(e, t) * t.aspect
					}
				}]), e
			}();
		t.exports = r
	},
	{}],
	9: [function (e, t, i)
	{
		"use strict";
		var n = function ()
			{
				function e(e, t)
				{
					for (var i = 0; i < t.length; i++)
					{
						var n = t[i];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function (t, i, n)
				{
					return i && e(t.prototype, i), n && e(t, n), t
				}
			}(),
			r = function ()
			{
				function e()
				{
					! function (e, t)
					{
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e)
				}
				return n(e, [
				{
					key: "inQuad",
					value: function (e, t, i, n)
					{
						return i * (e /= n) * e + t
					}
				},
				{
					key: "outQuad",
					value: function (e, t, i, n)
					{
						return -i * (e /= n) * (e - 2) + t
					}
				},
				{
					key: "inOutQuad",
					value: function (e, t, i, n)
					{
						return (e /= n / 2) < 1 ? i / 2 * e * e + t : -i / 2 * (--e * (e - 2) - 1) + t
					}
				},
				{
					key: "inCubic",
					value: function (e, t, i, n)
					{
						return i * (e /= n) * e * e + t
					}
				},
				{
					key: "outCubic",
					value: function (e, t, i, n)
					{
						return i * ((e = e / n - 1) * e * e + 1) + t
					}
				},
				{
					key: "inOutCubic",
					value: function (e, t, i, n)
					{
						return (e /= n / 2) < 1 ? i / 2 * e * e * e + t : i / 2 * ((e -= 2) * e * e + 2) + t
					}
				},
				{
					key: "inQuart",
					value: function (e, t, i, n)
					{
						return i * (e /= n) * e * e * e + t
					}
				},
				{
					key: "outQuart",
					value: function (e, t, i, n)
					{
						return -i * ((e = e / n - 1) * e * e * e - 1) + t
					}
				},
				{
					key: "inOutQuart",
					value: function (e, t, i, n)
					{
						return (e /= n / 2) < 1 ? i / 2 * e * e * e * e + t : -i / 2 * ((e -= 2) * e * e * e - 2) + t
					}
				},
				{
					key: "inQuint",
					value: function (e, t, i, n)
					{
						return i * (e /= n) * e * e * e * e + t
					}
				},
				{
					key: "outQuint",
					value: function (e, t, i, n)
					{
						return i * ((e = e / n - 1) * e * e * e * e + 1) + t
					}
				},
				{
					key: "inOutQuint",
					value: function (e, t, i, n)
					{
						return (e /= n / 2) < 1 ? i / 2 * e * e * e * e * e + t : i / 2 * ((e -= 2) * e * e * e * e + 2) + t
					}
				},
				{
					key: "inSine",
					value: function (e, t, i, n)
					{
						return -i * Math.cos(e / n * (Math.PI / 2)) + i + t
					}
				},
				{
					key: "outSine",
					value: function (e, t, i, n)
					{
						return i * Math.sin(e / n * (Math.PI / 2)) + t
					}
				},
				{
					key: "inOutSine",
					value: function (e, t, i, n)
					{
						return -i / 2 * (Math.cos(Math.PI * e / n) - 1) + t
					}
				},
				{
					key: "inExpo",
					value: function (e, t, i, n)
					{
						return 0 == e ? t : i * Math.pow(2, 10 * (e / n - 1)) + t
					}
				},
				{
					key: "outExpo",
					value: function (e, t, i, n)
					{
						return e == n ? t + i : i * (1 - Math.pow(2, -10 * e / n)) + t
					}
				},
				{
					key: "inOutExpo",
					value: function (e, t, i, n)
					{
						return 0 == e ? t : e == n ? t + i : (e /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + t : i / 2 * (2 - Math.pow(2, -10 * --e)) + t
					}
				},
				{
					key: "inCirc",
					value: function (e, t, i, n)
					{
						return -i * (Math.sqrt(1 - (e /= n) * e) - 1) + t
					}
				},
				{
					key: "outCirc",
					value: function (e, t, i, n)
					{
						return i * Math.sqrt(1 - (e = e / n - 1) * e) + t
					}
				},
				{
					key: "inOutCirc",
					value: function (e, t, i, n)
					{
						return (e /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + t : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
					}
				},
				{
					key: "inElastic",
					value: function (e, t, i, n)
					{
						var r = 1.70158,
							s = 0,
							a = i;
						if (0 == e) return t;
						if (1 == (e /= n)) return t + i;
						if (s || (s = .3 * n), a < Math.abs(i))
						{
							a = i
						}
						else r = s / (2 * Math.PI) * Math.asin(i / a);
						return -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - r) * (2 * Math.PI) / s) + t
					}
				},
				{
					key: "outElastic",
					value: function (e, t, i, n)
					{
						var r = 1.70158,
							s = 0,
							a = i;
						if (0 == e) return t;
						if (1 == (e /= n)) return t + i;
						if (s || (s = .3 * n), a < Math.abs(i))
						{
							a = i
						}
						else r = s / (2 * Math.PI) * Math.asin(i / a);
						return a * Math.pow(2, -10 * e) * Math.sin((e * n - r) * (2 * Math.PI) / s) + i + t
					}
				},
				{
					key: "inOutElastic",
					value: function (e, t, i, n)
					{
						var r = 1.70158,
							s = 0,
							a = i;
						if (0 == e) return t;
						if (2 == (e /= n / 2)) return t + i;
						if (s || (s = n * (.3 * 1.5)), a < Math.abs(i))
						{
							a = i
						}
						else r = s / (2 * Math.PI) * Math.asin(i / a);
						return e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - r) * (2 * Math.PI) / s) * -.5 + t : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - r) * (2 * Math.PI) / s) * .5 + i + t
					}
				},
				{
					key: "inBack",
					value: function (e, t, i, n, r)
					{
						return void 0 == r && (r = 1.70158), i * (e /= n) * e * ((r + 1) * e - r) + t
					}
				},
				{
					key: "outBack",
					value: function (e, t, i, n, r)
					{
						return void 0 == r && (r = 1.70158), i * ((e = e / n - 1) * e * ((r + 1) * e + r) + 1) + t
					}
				},
				{
					key: "inOutBack",
					value: function (e, t, i, n, r)
					{
						return void 0 == r && (r = 1.70158), (e /= n / 2) < 1 ? i / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + t : i / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + t
					}
				}]), e
			}();
		t.exports = r
	},
	{}],
	10: [function (e, t, i)
	{
		"use strict";
		var n = function ()
			{
				function e(e, t)
				{
					for (var i = 0; i < t.length; i++)
					{
						var n = t[i];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function (t, i, n)
				{
					return i && e(t.prototype, i), n && e(t, n), t
				}
			}(),
			r = function ()
			{
				function e(t, i)
				{
					var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
						r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					! function (e, t)
					{
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this._val = t, this._rate = i, this._dir = n, this._flip = r, this._valBase = t, this._rateBase = i, this._dirBase = n, this._flipBase = r, this.trigger = !1, this.triggerTop = !1, this.triggerBot = !1
				}
				return n(e, [
				{
					key: "reset",
					value: function ()
					{
						this._val = this._valBase, this._rate = this._rateBase, this._dir = this._dirBase, this._flip = this._flipBase, this.trigger = !1, this.triggerTop = !1, this.triggerBot = !1
					}
				},
				{
					key: "update",
					value: function (e)
					{
						this.trigger = !1, this.triggerTop = !1, this.triggerBot = !1, this._dir ? this._val < 1 ? this._val += this._rate * e : (this.trigger = !0, this.triggerTop = !0, this._flip ? this._val = this._val - 1 : (this._val = 1 - (this._val - 1), this._dir = !this._dir)) : this._val > 0 ? this._val -= this._rate * e : (this.trigger = !0, this.triggerBot = !0, this._flip ? this._val = 1 + this._val : (this._val = -this._val, this._dir = !this._dir))
					}
				},
				{
					key: "val",
					value: function (e)
					{
						return e ? e(this._val, 0, 1, 1) : this._val
					}
				}]), e
			}();
		t.exports = r
	},
	{}]
},
{}, [1]);